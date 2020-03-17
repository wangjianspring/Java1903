package hxzy.com.cn.model;

import java.io.Serializable;

public class Well implements Serializable {

	private static final long serialVersionUID = -3903627020724933012L;
	private int id;
	private int well_height;
	private String wellName;
	private String wellAddress;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getWell_height() {
		return well_height;
	}

	public void setWell_height(int well_height) {
		this.well_height = well_height;
	}

	public String getWellName() {
		return wellName;
	}

	public void setWellName(String wellName) {
		this.wellName = wellName;
	}

	public String getWellAddress() {
		return wellAddress;
	}

	public void setWellAddress(String wellAddress) {
		this.wellAddress = wellAddress;
	}

	@Override
	public String toString() {
		return "Well [id=" + id + ", well_height=" + well_height + ", wellName=" + wellName + ", wellAddress="
				+ wellAddress + "]";
	}

}
