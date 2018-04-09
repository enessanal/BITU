package sau.enes.saubitu;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class DBHelper extends SQLiteOpenHelper
{
    public static final String DATABASE_NAME = "SauBituDB1.db";


    public static final String QUERIES_TABLE_NAME = "Queries";
    public static final String QUERIES_COLUMN_ID = "ID";
    public static final String QUERIES_COLUMN_PRODUCT_NAME = "ProductName";
    public static final String QUERIES_COLUMN_COMPANY_NAME = "CompanyName";
    public static final String QUERIES_COLUMN_TIME = "Time";




    public static final String PRODUCTS_TABLE_NAME = "Products";
    public static final String PRODUCTS_COLUMN_ID = "ID";
    public static final String PRODUCTS_COLUMN_NAME = "Name";
    public static final String PRODUCTS_COLUMN_QRCODE = "QrCode";
    public static final String PRODUCTS_COLUMN_COMPANY_ID = "CompanyID";
    public static final String PRODUCTS_COLUMN_GROWN_LOCATION_LONGITUDE = "Longitude";
    public static final String PRODUCTS_COLUMN_GROWN_LOCATION_LATIDUDE = "Latitude";
    public static final String PRODUCTS_COLUMN_HARVEST_DATE = "HarvestDate";
    public static final String PRODUCTS_COLUMN_WAREHOUSE_WAITING_HOURS = "WareHouseWaitingHours";
    public static final String PRODUCTS_COLUMN_TRANSPORTATION_HOURS = "TransportationHours";
    public static final String PRODUCTS_COLUMN_DETAIL_HEADING = "DetailHeading";
    public static final String PRODUCTS_COLUMN_DETAIL_EXPLANATION = "DetailExplanation";


    public static final String COMPANIES_TABLE_NAME = "Companies";
    public static final String COMPANIES_COLUMN_ID = "ID";
    public static final String COMPANIES_COLUMN_NAME = "Name";
    public static final String COMPANIES_COLUMN_GROWN_LOCATION_LONGITUDE = "Longitude";
    public static final String COMPANIES_COLUMN_GROWN_LOCATION_LATIDUDE = "Latitude";
    public static final String COMPANIES_COLUMN_PHONE = "Phone";
    public static final String COMPANIES_COLUMN_EMAIL = "Email";
    public static final String COMPANIES_COLUMN_DETAIL_HEADING = "DetailHeading";
    public static final String COMPANIES_COLUMN_DETAIL_EXPLANATION = "DetailExplanation";

    private Context myContext;

    public DBHelper(Context context)
    {
        super(context, DATABASE_NAME, null, 9);
        myContext = context;
    }

    public void onCreate(SQLiteDatabase db)
    {
        db.execSQL(
                "CREATE TABLE " +
                        QUERIES_TABLE_NAME +
                        "(" +
                        QUERIES_COLUMN_ID + " INTEGER PRIMARY KEY NOT NULL, " +
                        QUERIES_COLUMN_PRODUCT_NAME + " TEXT," +
                        QUERIES_COLUMN_COMPANY_NAME + " TEXT," +
                        QUERIES_COLUMN_TIME + " TEXT" +
                        ")"
        );


        db.execSQL(
                "CREATE TABLE " +
                        PRODUCTS_TABLE_NAME +
                        "(" +

                        PRODUCTS_COLUMN_ID + " INTEGER PRIMARY KEY NOT NULL, " +
                        PRODUCTS_COLUMN_COMPANY_ID + " INTEGER," +
                        PRODUCTS_COLUMN_NAME + " TEXT," +
                        PRODUCTS_COLUMN_QRCODE + " TEXT," +
                        PRODUCTS_COLUMN_GROWN_LOCATION_LONGITUDE + " REAL," +
                        PRODUCTS_COLUMN_GROWN_LOCATION_LATIDUDE + " REAL," +
                        PRODUCTS_COLUMN_HARVEST_DATE + " TEXT," +
                        PRODUCTS_COLUMN_WAREHOUSE_WAITING_HOURS + " INTEGER," +
                        PRODUCTS_COLUMN_TRANSPORTATION_HOURS + " INTEGER," +
                        PRODUCTS_COLUMN_DETAIL_HEADING + " TEXT," +
                        PRODUCTS_COLUMN_DETAIL_EXPLANATION + " TEXT" +


                        ")"
        );

    }

    public void onUpgrade(SQLiteDatabase database, int oldVersion, int newVersion) {
        database.execSQL("DROP TABLE IF EXISTS " + PRODUCTS_TABLE_NAME);
        database.execSQL("DROP TABLE IF EXISTS " + QUERIES_TABLE_NAME);

        onCreate(database);
    }


    public void DeleteAllQueries() {
        SQLiteDatabase db = this.getWritableDatabase();
        db.delete(QUERIES_TABLE_NAME, "", null);

        db.execSQL("DELETE FROM SQLITE_SEQUENCE WHERE NAME = '" + QUERIES_TABLE_NAME + "'");
    }

    public boolean insertQuery(int ID, String ProductName, String CompanyName,String Time)
    {
        try
        {
            SQLiteDatabase db = this.getWritableDatabase();
            ContentValues contentValues = new ContentValues();


            contentValues.put(QUERIES_COLUMN_ID, ID);
            contentValues.put(QUERIES_COLUMN_PRODUCT_NAME, ProductName);
            contentValues.put(QUERIES_COLUMN_COMPANY_NAME, CompanyName);
            contentValues.put(QUERIES_COLUMN_TIME, Time);

            db.insert(QUERIES_TABLE_NAME, null, contentValues);
        }
        catch (Exception ex) {

            for(int i=0;i<10;i++)
            Toast.makeText(myContext, ex.getMessage().toString(), Toast.LENGTH_LONG).show();
        }

        return true;
    }

    public List<Query> getAllQueries()
    {
        List<Query> Queries = new ArrayList<Query>();

        try {
            SQLiteDatabase db = this.getReadableDatabase();
            Cursor cursor = db.rawQuery("SELECT * FROM " + QUERIES_TABLE_NAME, null);
            cursor.moveToFirst();

            while (!cursor.isAfterLast())
            {
                Query query = new Query();
                query.setID(cursor.getInt(cursor.getColumnIndex(QUERIES_COLUMN_ID)));
                query.setProductName(cursor.getString(cursor.getColumnIndex(QUERIES_COLUMN_PRODUCT_NAME)));
                query.setCompanyName(cursor.getString(cursor.getColumnIndex(QUERIES_COLUMN_COMPANY_NAME)));
                query.setTime(cursor.getString(cursor.getColumnIndex(QUERIES_COLUMN_TIME)));

                /*Toast.makeText(myContext, Integer.toString(query.getID()), Toast.LENGTH_LONG).show();
                Toast.makeText(myContext, query.getProductName(), Toast.LENGTH_LONG).show();
                Toast.makeText(myContext, query.getCompanyName(), Toast.LENGTH_LONG).show();
                Toast.makeText(myContext, query.getTime(), Toast.LENGTH_LONG).show();*/

                Queries.add(query);
                cursor.moveToNext();
            }
            cursor.close();
        } catch (Exception ex) {
            Toast.makeText(myContext, ex.getMessage().toString(), Toast.LENGTH_LONG).show();

        }

        return Queries;
    }



    /*public boolean insertCompany(Company company) {
        try
        {
            SQLiteDatabase db = this.getWritableDatabase();
            ContentValues contentValues = new ContentValues();



            COMPANIES_TABLE_NAME = "Companies";
            COMPANIES_COLUMN_ID = "ID";
            COMPANIES_COLUMN_NAME = "Name";
            COMPANIES_COLUMN_GROWN_LOCATION_LONGITUDE = "Longitude";
            COMPANIES_COLUMN_GROWN_LOCATION_LATIDUDE = "Latitude";
            COMPANIES_COLUMN_PHONE = "Phone";
            COMPANIES_COLUMN_EMAIL = "Email";
            COMPANIES_COLUMN_DETAIL_HEADING_1 = "DetailHeading1";
            COMPANIES_COLUMN_DETAIL_EXPLANATION_1 = "DetailExplanation1";
            COMPANIES_COLUMN_DETAIL_HEADING_2 = "DetailHeading2";
            COMPANIES_COLUMN_DETAIL_EXPLANATION_2 = "DetailExplanation2";
            COMPANIES_COLUMN_DETAIL_HEADING_3 = "DetailHeading3";
            COMPANIES_COLUMN_DETAIL_EXPLANATION_3 = "DetailExplanation3";

            contentValues.put(PRODUCTS_COLUMN_COMPANY_ID, company.getName());
            contentValues.put(COMPANIES_COLUMN_NAME, company.getName());
            contentValues.put(PRODUCTS_COLUMN_GROWN_LOCATION_LONGITUDE, company.getName());
            contentValues.put(PRODUCTS_COLUMN_GROWN_LOCATION_LATIDUDE, company.getName());
            contentValues.put(PRODUCTS_COLUMN_HARVEST_DATE, company.getName());
            contentValues.put(PRODUCTS_COLUMN_WAREHOUSE_WAITING_HOURS, company.getName());
            contentValues.put(PRODUCTS_COLUMN_TRANSPORTATION_HOURS, company.getName());


            try {
                contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING_1, product.getDetails().get(0).getHeading());
                contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION_1, product.getDetails().get(0).getExplanation());
            } catch (Exception ex) {
                contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING_1, "");
                contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION_1, "");
            }

            try {
                contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING_2, product.getDetails().get(1).getHeading());
                contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION_2, product.getDetails().get(1).getExplanation());
            } catch (Exception ex) {
                contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING_2, "");
                contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION_2, "");
            }

            try {
                contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING_3, product.getDetails().get(2).getHeading());
                contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION_3, product.getDetails().get(2).getExplanation());
            } catch (Exception ex) {
                contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING_3, "");
                contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION_3, "");
            }

            db.insert(PRODUCTS_TABLE_NAME, null, contentValues);
        } catch (Exception ex) {
            Toast.makeText(myContext, ex.getMessage().toString(), Toast.LENGTH_LONG).show();
        }

        return true;
    }*/

    public List<Company> getAllCompanies()
    {
        List<Company> companyList = new ArrayList<Company>();

        try {
            SQLiteDatabase db = this.getReadableDatabase();
            Cursor cursor = db.rawQuery("SELECT * FROM " + COMPANIES_TABLE_NAME, null);
            cursor.moveToFirst();

            while (!cursor.isAfterLast()) {
                Company company = new Company();
                company.setID(cursor.getInt(cursor.getColumnIndex(COMPANIES_COLUMN_ID)));
                company.setName(cursor.getString(cursor.getColumnIndex(COMPANIES_COLUMN_NAME)));
                company.getLocation().setLongitude(cursor.getDouble(cursor.getColumnIndex(COMPANIES_COLUMN_GROWN_LOCATION_LONGITUDE)));
                company.getLocation().setLatitude(cursor.getDouble(cursor.getColumnIndex(COMPANIES_COLUMN_GROWN_LOCATION_LATIDUDE)));
                company.setPhone(cursor.getString(cursor.getColumnIndex(COMPANIES_COLUMN_PHONE)));
                company.setEmail(cursor.getString(cursor.getColumnIndex(COMPANIES_COLUMN_EMAIL)));
                company.setDetailHeading(cursor.getString(cursor.getColumnIndex(COMPANIES_COLUMN_DETAIL_HEADING)));
                company.setDetailExplanation(cursor.getString(cursor.getColumnIndex(COMPANIES_COLUMN_DETAIL_EXPLANATION)));



                companyList.add(company);
                cursor.moveToNext();
            }
            cursor.close();

        }
        catch (Exception ex)
        {
            Toast.makeText(myContext, ex.getMessage().toString(), Toast.LENGTH_LONG).show();
        }

        return companyList;
    }




    public boolean insertProduct(Product product) {
        try {
            SQLiteDatabase db = this.getWritableDatabase();
            ContentValues contentValues = new ContentValues();


            contentValues.put(PRODUCTS_COLUMN_COMPANY_ID, product.getCompanyID());
            contentValues.put(PRODUCTS_COLUMN_NAME, product.getName());
            contentValues.put(PRODUCTS_COLUMN_GROWN_LOCATION_LONGITUDE, product.getGrownLocation().getLongitude());
            contentValues.put(PRODUCTS_COLUMN_GROWN_LOCATION_LATIDUDE, product.getGrownLocation().getLatitude());
            contentValues.put(PRODUCTS_COLUMN_HARVEST_DATE, product.getHarvestDate().toString());
            contentValues.put(PRODUCTS_COLUMN_WAREHOUSE_WAITING_HOURS, product.getWareHouseWaitingHours());
            contentValues.put(PRODUCTS_COLUMN_TRANSPORTATION_HOURS, product.getTransportationHours());
            contentValues.put(PRODUCTS_COLUMN_DETAIL_HEADING, product.getDetailHeading());
            contentValues.put(PRODUCTS_COLUMN_DETAIL_EXPLANATION, product.getDetailExplanation());


            db.insert(PRODUCTS_TABLE_NAME, null, contentValues);
        } catch (Exception ex) {
            Toast.makeText(myContext, ex.getMessage().toString(), Toast.LENGTH_LONG).show();
        }

        return true;
    }

    public List<Product> getAllProducts() {
        List<Product> productList = new ArrayList<Product>();

        try {
            SQLiteDatabase db = this.getReadableDatabase();
            Cursor cursor = db.rawQuery("SELECT * FROM " + PRODUCTS_TABLE_NAME, null);
            cursor.moveToFirst();

            while (!cursor.isAfterLast())
            {
                Product product = new Product();
                product.setID(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_ID)));
                product.setCompanyID(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_COMPANY_ID)));
                product.setName(cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_NAME)));
                product.getGrownLocation().setLongitude(cursor.getDouble(cursor.getColumnIndex(PRODUCTS_COLUMN_GROWN_LOCATION_LONGITUDE)));
                product.getGrownLocation().setLatitude(cursor.getDouble(cursor.getColumnIndex(PRODUCTS_COLUMN_GROWN_LOCATION_LATIDUDE)));

                String tmpDate = cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_HARVEST_DATE));

                product.setWareHouseWaitingHours(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_WAREHOUSE_WAITING_HOURS)));
                product.setTransportationHours(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_TRANSPORTATION_HOURS)));
                product.setDetailHeading(cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_DETAIL_HEADING)));
                product.setDetailExplanation(cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_DETAIL_EXPLANATION)));

                productList.add(product);
                cursor.moveToNext();
            }
            cursor.close();
        } catch (Exception ex) {
            Toast.makeText(myContext, ex.getMessage().toString(), Toast.LENGTH_LONG).show();


        }

        return productList;
    }

    public void DeleteAllProducts() {
        SQLiteDatabase db = this.getWritableDatabase();
        db.delete(PRODUCTS_TABLE_NAME, "", null);

        db.execSQL("DELETE FROM SQLITE_SEQUENCE WHERE NAME = '" + PRODUCTS_TABLE_NAME + "'");
    }

    public Product getLastProduct()
    {
        Product product = new Product();
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery("SELECT * FROM " + PRODUCTS_TABLE_NAME, null);
        cursor.moveToFirst();

        while (!cursor.isAfterLast())
        {
            product.setID(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_ID)));
            product.setCompanyID(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_COMPANY_ID)));
            product.setName(cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_NAME)));
            product.getGrownLocation().setLongitude(cursor.getDouble(cursor.getColumnIndex(PRODUCTS_COLUMN_GROWN_LOCATION_LONGITUDE)));
            product.getGrownLocation().setLatitude(cursor.getDouble(cursor.getColumnIndex(PRODUCTS_COLUMN_GROWN_LOCATION_LATIDUDE)));

            String tmpDate = cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_HARVEST_DATE));

            product.setWareHouseWaitingHours(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_WAREHOUSE_WAITING_HOURS)));
            product.setTransportationHours(cursor.getInt(cursor.getColumnIndex(PRODUCTS_COLUMN_TRANSPORTATION_HOURS)));
            product.setDetailHeading(cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_DETAIL_HEADING)));
            product.setDetailExplanation(cursor.getString(cursor.getColumnIndex(PRODUCTS_COLUMN_DETAIL_EXPLANATION)));

            cursor.moveToNext();
        }
        cursor.close();


        return product;
    }

}
