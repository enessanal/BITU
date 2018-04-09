package sau.enes.saubitu;

import java.util.Date;

public class FeedBack
{
    private int ID;
    private Date Date;
    private String Type;
    private String Explanation;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public java.util.Date getDate() {
        return Date;
    }

    public void setDate(Date date) {
        Date = date;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public String getExplanation() {
        return Explanation;
    }

    public void setExplanation(String explanation) {
        Explanation = explanation;
    }

}
