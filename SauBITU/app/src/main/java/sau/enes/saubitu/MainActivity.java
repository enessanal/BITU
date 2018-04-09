package sau.enes.saubitu;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;

import com.blikoon.qrcodescanner.QrCodeActivity;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity
{
    private Button button1,button2,button3;
    private static final int REQUEST_CODE_QR_SCAN = 101;
    private final String LOGTAG="LOG_SCAN";

    public static List<Product> products=new ArrayList<Product>();
    public static List<Company> companies=new ArrayList<Company>();

    FirebaseDatabase database;
    DatabaseReference refCompanies;
    DatabaseReference refProducts;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
//                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        button1 = (Button) findViewById(R.id.button);
        button2 = (Button) findViewById(R.id.button2);
        button3 = (Button) findViewById(R.id.button3);


        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                startActivity(new Intent(getApplicationContext(),DatabaseTestActivity.class));
            }
        });




        database = FirebaseDatabase.getInstance();
        refCompanies = database.getReference("Companies");
        refProducts = database.getReference("Products");


        refProducts.addValueEventListener(new ValueEventListener()
    {
        @Override
        public void onDataChange(DataSnapshot dataSnapshot)
        {
            MainActivity.products.clear();
            Log.d("FDG_2p_INFO","OnDataChanged Function");
            Log.d("FDG_2p_INFO","Products size is "+MainActivity.products.size()+" at first.");
            Log.d("FDG_2p_INFO","Looping...");

            for (DataSnapshot snapshot1 : dataSnapshot.getChildren())
            {
                try
                {
                    int ID = Integer.parseInt(snapshot1.getKey().toString());
                    int CompanyID = Integer.parseInt(snapshot1.child("CompanyID").getValue().toString());
                    String Name = snapshot1.child("Name").getValue().toString();
                    Location GrownLocation = new Location(Double.parseDouble(snapshot1.child("Longitude").getValue().toString()),
                            Double.parseDouble(snapshot1.child("Latitude").getValue().toString()));
                    int WareHouseWaitingHours = Integer.parseInt(snapshot1.child("WarehouseWaitingHours").getValue().toString());
                    int TransportationHours = Integer.parseInt(snapshot1.child("TransportationHours").getValue().toString());
                    Product product = new Product(ID, CompanyID, Name, GrownLocation, WareHouseWaitingHours, TransportationHours);
                    product.setStringHarvestDate(snapshot1.child("HarvestDate").getValue().toString());

                    MainActivity.products.add(product);
                } catch (Exception ex) {
                    Log.d("FDG_2p_ERROR!", ex.getMessage().toString());
                }
            }

            Log.d("FDG_2p_INFO","Loop End.");
            Log.d("FDG_2p_INFO","Companies size is "+MainActivity.products.size()+" now.");
        }
        @Override
        public void onCancelled(DatabaseError databaseError)
        {
            Log.d("FDG_2p_INFO","onCancelled Function.");
        }
    });

        refCompanies.addValueEventListener(new ValueEventListener()
        {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot)
            {
                MainActivity.companies.clear();
                Log.d("FDG_2p_INFO","OnDataChanged Function 1");
                Log.d("FDG_2p_INFO","Companies size is "+MainActivity.companies.size()+" at first.");
                Log.d("FDG_2p_INFO","Looping...");

                for (DataSnapshot snapshot1 : dataSnapshot.getChildren())
                {
                    try
                    {
                        int ID = Integer.parseInt(snapshot1.getKey().toString());
                        String Name = snapshot1.child("Name").getValue().toString();
                        String Email = snapshot1.child("Email").getValue().toString();
                        String Phone = snapshot1.child("Phone").getValue().toString();
                        Location location = new Location(Double.parseDouble(snapshot1.child("Longitude").getValue().toString()),
                                Double.parseDouble(snapshot1.child("Latitude").getValue().toString()));

                        MainActivity.companies.add(new Company(ID,Name,Phone,Email,location));

                    }
                    catch (Exception ex)
                    {
                        Log.d("FDG_2p_ERROR!", ex.getMessage().toString());
                    }
                }

                Log.d("FDG_2p_INFO","Loop End.");
                Log.d("FDG_2p_INFO","Companies size is "+MainActivity.companies.size()+" now.");
            }
            @Override
            public void onCancelled(DatabaseError databaseError)
            {
                Log.d("FDG_2p_INFO","onCancelled Function.");
            }
        });
        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                Intent intent=new Intent(MainActivity.this, QrCodeActivity.class);
                startActivityForResult(intent,REQUEST_CODE_QR_SCAN);
            }
        });

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        if(resultCode != Activity.RESULT_OK)
        {
            Log.d(LOGTAG,"COULD NOT GET A GOOD RESULT.");
            if(data==null)
                return;
            //Getting the passed result
            String result = data.getStringExtra("com.blikoon.qrcodescanner.error_decoding_image");

            if( result!=null)
            {
                AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this).create();
                alertDialog.setTitle("Scan Error");
                alertDialog.setMessage("QR Code could not be scanned");
                alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                dialog.dismiss();
                            }
                        });
                alertDialog.show();
            }
            return;

        }
        if(requestCode == REQUEST_CODE_QR_SCAN)
        {
            if(data==null)
                return;
            //Getting the passed result
            String result = data.getStringExtra("com.blikoon.qrcodescanner.got_qr_scan_relult");
            Log.d(LOGTAG,"Have scan result in your app activity :"+ result);


            try
            {
                Product product = products.get(Integer.parseInt(result) - 1);

                Intent intent=new Intent(this,QrResultActiviy.class);
                intent.putExtra("extra1",result);
                startActivity(intent);
            }
            catch (Exception exception)
            {
                AlertDialog alertDialog = new AlertDialog.Builder(this).create();
                alertDialog.setTitle("TARAMA SONUCU");
                alertDialog.setCancelable(false);
                alertDialog.setMessage("Ürün Bulunamadı ( "+result+" )");
                alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, "Tamam",
                        new DialogInterface.OnClickListener()
                        {
                            public void onClick(DialogInterface dialog, int which)
                            {
                                dialog.dismiss();
                            }
                        });
                alertDialog.show();
            }

        }
    }


    public void ChangeIntent(View view)
    {
        Intent intent=new Intent(this,DatabaseTestActivity.class);
        startActivity(intent);
    }
}
