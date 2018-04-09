package sau.enes.saubitu;

import java.util.Date;

public class Query
{
    private int ID;
    private String Time;
    private String ProductName;
    private String CompanyName;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String time) {
        Time = time;
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


    public String toString()
    {
        return this.ID+" - "+ProductName+", "+CompanyName+", "+Time;
    }

}
