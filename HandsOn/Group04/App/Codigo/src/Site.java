
public class Site {
	
	public String nombre;
	public String descripcionentidad;
	public String horario;
	public String equipamiento;
	public String transporte;
	public String descripcion;
	public String content;
	public String calle;
	public String cp;
	public String barrio;
	public String barriourl;
	public String distrito;
	public String distritourl;
	public String coordenadas;
	public String telefono;
	public String email;
	public String tipo;
	
	public Site(String nombre, String descripcionentidad, String horario, String equipamiento, String transporte,
			String descripcion, String content, String calle, String cp, String barrio, String barriourl, 
			String distrito, String distritourl, String coordenadas, String telefono, String email, String tipo) {
		this.nombre = nombre;
		this.descripcionentidad = descripcionentidad;
		this.horario = horario;
		this.equipamiento = equipamiento;
		this.transporte = transporte;
		this.descripcion = descripcion;
		this.content = content;
		this.calle = calle;
		this.cp = cp;
		this.barrio = barrio;
		this.barriourl = barriourl;
		this.distrito = distrito;
		this.distritourl = distritourl;
		this.coordenadas = coordenadas;
		this.telefono = telefono;
		this.email = email;
		this.tipo = tipo;
	}
	
	public String toString() {
		return nombre + "\n" +descripcionentidad + "\n" +horario + "\n" +equipamiento + "\n" +transporte + "\n" +descripcion + "\n" +content + "\n" +
				calle + "\n" +cp + "\n" +barrio + "\n" +barriourl + "\n" +distrito + "\n" +distritourl + "\n" +coordenadas + "\n" +
				telefono + "\n" +email + "\n" +tipo;
	}
	
	public String getNombre() {
		return this.nombre;
	}
	public void setNombre(String s) {
		this.nombre = s;
	}
	
	public String getDE() {
		return this.descripcionentidad;
	}
	public void setDE(String s) {
		this.descripcionentidad = s;
	}
	
	public String getHorario() {
		return this.horario;
	}
	public void setHorario(String s) {
		this.horario = s;
	}
	
	public String getEquip() {
		return this.equipamiento;
	}
	public void setEquip(String s) {
		this.equipamiento = s;
	}
	
	public String getTrans() {
		return this.transporte;
	}
	public void setTrans(String s) {
		this.transporte = s;
	}
	
	public String getDescr() {
		return this.descripcion;
	}
	public void setDescr(String s) {
		this.descripcion = s;
	}
	
	public String getContent() {
		return this.content;
	}
	public void setContent(String s) {
		this.content = s;
	}
	
	public String getCalle() {
		return this.calle;
	}
	public void setCalle(String s) {
		this.calle = s;
	}
	
	public String getCP() {
		return this.cp;
	}
	public void setCP(String s) {
		this.cp = s;
	}
	
	public String getBarrio() {
		return this.barrio;
	}
	public void setBarrio(String s) {
		this.barrio = s;
	}
	
	public String getBarrioURL() {
		return this.barriourl;
	}
	public void setBarrioURL(String s) {
		this.barriourl = s;
	}
	
	public String getDistrito() {
		return this.distrito;
	}
	public void setDistrito(String s) {
		this.distrito = s;
	}
	
	public String getDistritoURL() {
		return this.distritourl;
	}
	public void setDistritoURL(String s) {
		this.distritourl = s;
	}
	
	public String getCoord() {
		return this.coordenadas;
	}
	public void setCoord(String s) {
		this.coordenadas = s;
	}
	
	public String getTelefono() {
		return this.telefono;
	}
	public void setTelefono(String s) {
		this.telefono = s;
	}
	
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String s) {
		this.email = s;
	}
	
	public String getTipo() {
		return this.tipo;
	}
	public void setTipo(String s) {
		this.tipo = s;
	}
	
}
