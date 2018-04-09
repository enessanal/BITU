package sau.enes.saubitu;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class QrResultActiviy extends AppCompatActivity {

    private long countQueries;
    private String companyName;


    private TextView txtViewProductName;
    private TextView txtViewCompanyName;
    private TextView txtViewWTime;
    private TextView txtViewTTime;
    private TextView txtViewHarvestDate;
    DBHelper db;


    private FirebaseDatabase database = FirebaseDatabase.getInstance();
    private DatabaseReference myRef = database.getReference("Queries");

    private Product product;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        product = new Product();
        companyName = "";
        db = new DBHelper(this);

        try
        {
            Log.d("FDG_2p_INFO", "QR CODE Activity Started");
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_qr_result_activiy);
            product = MainActivity.products.get(Integer.parseInt(getIntent().getStringExtra("extra1")) - 1);

            for (Company company : MainActivity.companies)
            {
                if (product.getCompanyID() == company.getID()) companyName = company.getName();
            }
        }
        catch (Exception ex)
        {
            Log.d("FDG_2p_ERROR!", ex.getMessage().toString());
            AlertDialog alertDialog = new AlertDialog.Builder(this).create();
            alertDialog.setTitle("Scan Result");
            alertDialog.setCancelable(false);
            alertDialog.setMessage("Not Found ( " + getIntent().getStringExtra("extra1") + " )");
            alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, "OK",
                    new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int which) {
                            startActivity(new Intent(QrResultActiviy.this, MainActivity.class));
//                            dialog.dismiss();
                        }
                    });
            alertDialog.show();
        }


        txtViewProductName=(TextView) findViewById(R.id.textViewProductName);
        txtViewCompanyName=(TextView) findViewById(R.id.textViewCompanyName);
        txtViewWTime=(TextView) findViewById(R.id.textViewWtime);
        txtViewTTime=(TextView) findViewById(R.id.textViewTtime);
        txtViewHarvestDate=(TextView) findViewById(R.id.textViewTtimeharvestDate);

        try {
            if (product != null) {

                txtViewProductName.setText(product.getName());
                txtViewCompanyName.setText(companyName);
                txtViewWTime.setText(Integer.toString( product.getWareHouseWaitingHours()));
                txtViewTTime.setText(Integer.toString(product.getTransportationHours()));
                txtViewHarvestDate.setText(product.getStringHarvestDate());
            }

            countQueries = 0;
            myRef.addListenerForSingleValueEvent(new ValueEventListener()
            {
                @Override
                public void onDataChange(DataSnapshot dataSnapshot)
                {
                    countQueries = dataSnapshot.getChildrenCount();

                    myRef = database.getReference("Queries/" + Long.toString(countQueries + 1) + "/ProductID");
                    myRef.setValue(product.getID());


                    myRef = database.getReference("Queries/" + Long.toString(countQueries + 1) + "/ProductName");
                    myRef.setValue(product.getName());

                    myRef = database.getReference("Queries/" + Long.toString(countQueries + 1) + "/CompanyName");
                    myRef.setValue(companyName);

                    myRef = database.getReference("Queries/" + Long.toString(countQueries + 1) + "/Time");
                    myRef.setValue(new SimpleDateFormat("dd.MM.yyyy, hh:mm:ss").format(Calendar.getInstance().getTime()));


                    db.insertQuery(db.getAllQueries().size()+1,product.getName(),companyName,new SimpleDateFormat("dd.MM.yyyy, hh:mm:ss").format(Calendar.getInstance().getTime()));
                }

                @Override
                public void onCancelled(DatabaseError databaseError)
                {

                }
            });
        }
        catch (Exception exception)
        {
            AlertDialog alertDialog = new AlertDialog.Builder(this).create();
            alertDialog.setTitle("ERROR!");
            alertDialog.setMessage(exception.getMessage());
            alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, "OK",
                    new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int which)
                        {
                            dialog.dismiss();
                        }
                    });
            alertDialog.show();
        }
    }
}