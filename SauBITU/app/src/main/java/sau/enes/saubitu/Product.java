package sau.enes.saubitu;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Product
{
    private int ID;
    private int CompanyID;
    private String Name;
    private Location GrownLocation;
    private Date HarvestDate;
    private int WareHouseWaitingHours;
    private int TransportationHours;
    private String QRCode;
    private String DetailHeading;
    private String DetailExplanation;

    public String getStringHarvestDate() {
        return StringHarvestDate;
    }

    public void setStringHarvestDate(String stringHarvestDate) {
        StringHarvestDate = stringHarvestDate;
    }

    private String StringHarvestDate;


    public String getDetailHeading() {
        return DetailHeading;
    }

    public void setDetailHeading(String detailHeading) {
        DetailHeading = detailHeading;
    }

    public String getDetailExplanation() {
        return DetailExplanation;
    }

    public void setDetailExplanation(String detailExplanation) {
        DetailExplanation = detailExplanation;
    }

    public Product(int ID, int companyID, String name, double longtitude,double latitude, Date harvestDate, int wareHouseWaitingHours, int transportationHours)
    {
        this.ID = ID;
        CompanyID = companyID;
        Name = name;
        GrownLocation =new Location(longtitude,latitude);
        HarvestDate = harvestDate;
        WareHouseWaitingHours = wareHouseWaitingHours;
        TransportationHours = transportationHours;
    }



    public Product(int ID, int companyID, String name, Location location, Date harvestDate, int wareHouseWaitingHours, int transportationHours)
    {
        this.ID = ID;
        CompanyID = companyID;
        Name = name;
        GrownLocation =location;
        HarvestDate = harvestDate;
        WareHouseWaitingHours = wareHouseWaitingHours;
        TransportationHours = transportationHours;
    }


    public Product(int ID, int companyID, String name, Location location, int wareHouseWaitingHours, int transportationHours)
    {
        this.ID = ID;
        CompanyID = companyID;
        Name = name;
        GrownLocation =location;
        WareHouseWaitingHours = wareHouseWaitingHours;
        TransportationHours = transportationHours;
    }


    public Product()
    {
        GrownLocation=new Location();
    }

    public int getID()
    {
        return ID;
    }

    public void setID(int ID)
    {
        this.ID = ID;
    }

    public int getCompanyID()
    {
        return CompanyID;
    }

    public void setCompanyID(int companyID)
    {
        CompanyID = companyID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name)
    {
        Name = name;
    }

    public Location getGrownLocation()
    {
        return GrownLocation;
    }

    public void setGrownLocation(Location grownLocation)
    {
        GrownLocation = grownLocation;
    }

    public Date getHarvestDate()
    {
        return HarvestDate;
    }

    public void setHarvestDate(Date harvestDate)
    {
        HarvestDate = harvestDate;
    }

    public int getWareHouseWaitingHours()
    {
        return WareHouseWaitingHours;
    }

    public void setWareHouseWaitingHours(int wareHouseWaitingHours)
    {
        WareHouseWaitingHours = wareHouseWaitingHours;
    }

    public int getTransportationHours()
    {
        return TransportationHours;
    }

    public void setTransportationHours(int transportationHours)
    {
        TransportationHours = transportationHours;
    }

    public String toString()
    {
        return this.ID+" - "+this.Name;
    }

}
