package sau.enes.saubitu;

import java.util.ArrayList;
import java.util.Date;

public class Company
{
    private int ID;
    private String Name;
    private Location Location;
    private String Phone;
    private String Email;
    private String DetailHeading;
    private String DetailExplanation;


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


    public Company(int ID, String name,double longtitude,double latitude, String phone, String email) {
        this.ID = ID;
        Name = name;
        Location=new Location(longtitude,latitude);
        Phone = phone;
        Email = email;
    }

    public Company(int ID, String name,  String phone, String email , Location location  )
    {
        this.ID = ID;
        Name = name;
        Location=location;
        Phone = phone;
        Email = email;
    }



    public Company(String name,double longtitude,double latitude, String phone, String email)
    {
        Name = name;
        Location=new Location(longtitude,latitude);
        Phone = phone;
        Email = email;
    }

    public sau.enes.saubitu.Location getLocation()
    {
        return Location;
    }

    public void setLocation(sau.enes.saubitu.Location location)
    {
        Location = location;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }


    public Company()
    {
        this.Location=new Location();
    }


    public int getID()
    {
        return ID;
    }

    public void setID(int ID)
    {
        this.ID = ID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name)
    {
        Name = name;
    }

    public String toString()
    {
        return this.ID+" - "+this.Name;
    }
}
