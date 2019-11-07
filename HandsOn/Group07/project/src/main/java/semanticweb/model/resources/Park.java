package semanticweb.model.resources;

import java.util.ArrayList;

public class Park {
    private String name;
    private String description;
    private String transport;
    private ArrayList<Tree> trees;
    private String latitude;
    private String longitude;
    private String imageDis;
    private String nameDis;


    public Park() {
        this.trees = new ArrayList<>();
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getTransport() {
        return transport;
    }

    public ArrayList<Tree> getTrees() {
        return trees;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTransport(String transport) {
        this.transport = transport;
    }

    public void setTrees(ArrayList<Tree> trees) {
        this.trees = trees;
    }

    public String getImageDis() {
        return imageDis;
    }

    public void setImageDis(String imageDis) {
        this.imageDis = imageDis;
    }

    public String getNameDis() {
        return nameDis;
    }

    public void setNameDis(String nameDis) {
        this.nameDis = nameDis;
    }
}
