package sau.enes.saubitu;

import android.app.AlertDialog;
import android.app.ListActivity;
import android.content.DialogInterface;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Toast;

import java.util.List;
import java.util.Random;

public class DatabaseTestActivity extends ListActivity
{
    DBHelper db;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_database_test);
        db = new DBHelper(this);

        List<Query> queries = db.getAllQueries();



        final ArrayAdapter<Query> adaptor = new ArrayAdapter<Query>
                (this, android.R.layout.simple_list_item_1, queries);

        setListAdapter(adaptor);

    }


    protected void onResume()
    {
        super.onResume();
    }

    protected void onPause()
    {
        db.close();
        super.onPause();
    }
}





























/*
package sau.enes.saubitu;

        import android.app.AlertDialog;
        import android.app.ListActivity;
        import android.content.DialogInterface;
        import android.database.Cursor;
        import android.os.Bundle;
        import android.view.View;
        import android.widget.AdapterView;
        import android.widget.ArrayAdapter;
        import android.widget.Button;
        import android.widget.Toast;

        import java.util.List;
        import java.util.Random;

public class DatabaseTestActivity extends ListActivity
{*/
    //String isimler[]= {
    //}
//        "KÜLTÜR MANTARI ",
//        "PATATES ORTA",
//        "SOĞAN",
//        "ELMA",
//        "DOMATES LÜX",
//        "PATLICAN",
//        "HAVUÇ",
//        "BİBER ÇARLİSTON",
//        "SALATALIK",
//        "KIRMIZI LAHANA",
//        "LİMON",
//        "FASULYE",
//        "KABAK",
//        "SARIMSAK",
//        "BİBER DOLMALIK",
//        "KIRMIZI BİBER",
//        "LAHANA BEYAZ",
//        "BİBER SİVRİ",
//        "PIRASA",
//        "BROKOLİ",
//        "TURP",
//        "TAZE SOĞAN",
//        "MUZ İTHAL",
//        "SALATALIK SİLOR",
//        "PATATES HAŞLAMALIK",
//        "DOMATES",
//        "ISPANAK TAZE",
//        "PATLICAN KARNIYARIK",
//        "KEREVİZ",
//        "KARNABAHAR",
//        "SEMİZ OTU",
//        "BRÜKSEL LAHANASI",
//        "PATATES LUX",
//        "KARA LAHANA",
//        "DOMATES SALKIM",
//        "BEZELYE",
//        "BAL KABAĞI",
//};
/*
    DBHelper db;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_database_test);
        db = new DBHelper(this);

        List<Product>products = db.getAllProducts();
        final ArrayAdapter<Product>adaptor = new ArrayAdapter<Product>
                (this, android.R.layout.simple_list_item_1, products);
        final Button ekle = (Button) findViewById(R.id.add);
        final Button sil = (Button) findViewById(R.id.delete);
        final Button silHepsini = (Button) findViewById(R.id.deleteall);

        setListAdapter(adaptor);

        if (adaptor.isEmpty()) {
            sil.setEnabled(false);
            silHepsini.setEnabled(false);

        } else {
            sil.setEnabled(true);
            silHepsini.setEnabled(true);
        }
        ekle.setText("ADD (" + adaptor.getCount() + ")");


        ekle.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                Random r = new Random();
                Product product = new Product();
                product.setName(isimler[r.nextInt(isimler.length)]);
                db.insertProduct(product);

                product=db.getLastProduct();
                adaptor.add(product);

                sil.setEnabled(true);
                silHepsini.setEnabled(true);

                ekle.setText("ADD (" + adaptor.getCount() + ")");
            }
        });


        silHepsini.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                db.DeleteAllProducts();
                adaptor.clear();

                sil.setEnabled(false);
                silHepsini.setEnabled(false);

                ekle.setText("ADD (" + adaptor.getCount() + ")");
            }
        });

    }


    protected void onResume()
    {
        super.onResume();
    }

    protected void onPause()
    {
        db.close();
        super.onPause();
    }
}
*/