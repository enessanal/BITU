/**
 * Created by ASUS on 19-Dec-17.
 */

public class Query
{
    private int ID;
    private String ProductName;
    private String CompanyName;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getProductName() {
        return ProductName;
    }

    public void setProductName(String productName) {
        ProductName = productName;
    }

    public String getCompanyName() {
        return CompanyName;
    }

    public void setCompanyName(String companyName) {
        CompanyName = companyName;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String time) {
        Time = time;
    }

    private String Time;


    public String toString()
    {
        return this.Time;
    }
}
