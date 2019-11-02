package semanticweb.model.resources;

public class Tree {
    private String name;
    private String description;
    private String clase;
    private String division;
    private String family;
    private String quantity;

  public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getClase() {
        return clase;
    }

    public String getDivision() {
        return division;
    }

    public String getFamily() {
        return family;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setClase(String clase) {
        this.clase = clase;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public void setFamily(String family) {
        this.family = family;
    }

}
