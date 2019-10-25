
public class Site {

	public String rotulo;
	public String horario;
	public String direccion;
	public String cp;
	public String precioA;
	public String precio95;
	public String precio98;
	public String precioNA;
	public String coordenadas;

	public Site(String rotulo, String horario, String direccion, String cp, String precioA,	String precio95, String precio98, String precioNA, String coordenadas) {
		this.rotulo = rotulo;
		this.horario = horario;
		this.direccion = direccion;
		this.cp = cp;
		this.precioA = precioA;
		this.precio95 = precio95;
		this.precio98 = precio98;
		this.precioNA = precioNA;
		this.coordenadas = coordenadas;
	}

	public String toString() {
		return rotulo + "\n" + horario + "\n" + direccion + "\n" + cp + "\n" + precioA + "\n" + precio95 + "\n" +
				precio98 + "\n" + precioNA;
	}

	public String getRotulo() {
		return this.rotulo;
	}

	public String getHorario() {
		return this.horario;
	}

	public String getDireccion() {
		return this.direccion;
	}

	public String getCP() {
		return this.cp;
	}

	public String getPrecioA() {
		return this.precioA;
	}

	public String getPrecio95() {
		return this.precio95;
	}

	public String getPrecio98() {
		return this.precio98;
	}

	public String getPrecioNA() {
		return this.precioNA;
	}

	public String getCoord() {
		return this.coordenadas;
	}
}
