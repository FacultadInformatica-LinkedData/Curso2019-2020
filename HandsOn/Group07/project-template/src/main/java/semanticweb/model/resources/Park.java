package semanticweb.model.resources;
import java.util.ArrayList;

public class Park {
    private String name;
    private String description;
    private String transport;
    private ArrayList<Tree> trees;

    public Park() {
        this.trees = new ArrayList<>();
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
}
