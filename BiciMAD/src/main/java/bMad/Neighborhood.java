package bMad;

import java.util.HashMap;


public class Neighborhood {
    private HashMap<String, String> neighborhoods;

    public Neighborhood() {
        this.neighborhoods= new HashMap<String, String>();
        this.neighborhoods.put("SOL", "Q2465181");
        this.neighborhoods.put("UNIVERSIDAD", "Q10387767");
        this.neighborhoods.put("ARAPILES", "Q10856744");
        this.neighborhoods.put("JUSTICIA", "Q1992319");
        this.neighborhoods.put("ALMAGRO", "Q10954432");
        this.neighborhoods.put("PALACIO", "Q2136510");
        this.neighborhoods.put("ARGÜELLES", "Q64874");
        this.neighborhoods.put("CORTES", "Q2535637");
        this.neighborhoods.put("EMBAJADORES", "Q2449844");
        this.neighborhoods.put("LAS ACACIAS", "Q3319190");
        this.neighborhoods.put("JERÓNIMOS", "Q10306766");
        this.neighborhoods.put("IBIZA", "Q15249910");
        this.neighborhoods.put("NIÑO JESÚS", "Q3773746");
        this.neighborhoods.put("ESTRELLA", "Q3773738");
        this.neighborhoods.put("PACÍFICO", "Q3773753");
        this.neighborhoods.put("ADELFAS", "Q3774001");
        this.neighborhoods.put("RECOLETOS", "Q3814551");
        this.neighborhoods.put("CASTELLANA", "Q4781");
        this.neighborhoods.put("GOYA", "Q3814578");
        this.neighborhoods.put("CASA DE CAMPO", "Q16302441");
        this.neighborhoods.put("GAZTAMBIDE", "Q10288587");
        this.neighborhoods.put("PALOS DE MOGUER", "Q521009");
        this.neighborhoods.put("ATOCHA", "Q3814594");
        this.neighborhoods.put("TRAFALGAR", "Q10384027");
        this.neighborhoods.put("RÍOS ROSAS", "Q10366270");
        this.neighborhoods.put("CUATRO CAMINOS", "Q5824684");
        this.neighborhoods.put("EL VISO", "Q4778");
        this.neighborhoods.put("LISTA", "Q4779");
        this.neighborhoods.put("CASTILLEJOS", "Q11913212");
        this.neighborhoods.put("NUEVA ESPAÑA", "Q10338128");
        this.neighborhoods.put("HISPANOAMÉRICA", "Q3814573");
        this.neighborhoods.put("LAS DELICIAS", "Q3773736");
        this.neighborhoods.put("LA CHOPERA", "Q3773750");
        this.neighborhoods.put("IMPERIAL", "Q3773740");

    }
    public String get (String s){
        if(this.neighborhoods.containsKey(s))
            return this.neighborhoods.get(s);
        else
            return "";
    }

}