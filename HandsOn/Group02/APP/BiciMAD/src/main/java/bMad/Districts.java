package bMad;


import java.util.HashMap;


public class Districts {
    private HashMap<String, String> distritos = new HashMap<String, String>();


    public Districts(){
        this.distritos.put("CENTRO", "Q1763376");
        this.distritos.put("CHAMBERÍ", "Q1763370");
        this.distritos.put("MONCLOA-ARAVACA", "Q2017682");
        this.distritos.put("ARGANZUELA", "Q2000929");
        this.distritos.put("RETIRO", "Q2002296");
        this.distritos.put("SALAMANCA", "Q1773521");
        this.distritos.put("TETUAN", "Q1773540");
        this.distritos.put("CHAMARTÍN", "Q1766348");

    }
    public String get (String s){
        if(this.distritos.containsKey(s))
            return this.distritos.get(s);
        else
            return "";
    }
}