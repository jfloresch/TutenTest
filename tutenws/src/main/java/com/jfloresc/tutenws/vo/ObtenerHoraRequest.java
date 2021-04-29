package com.jfloresc.tutenws.vo;

/**
 * 
 * @author jfloresc
 *
 */
public class ObtenerHoraRequest {

	private String time;

	private String timezone;

	/**
	 * 
	 * @return
	 */
	public String getTime() {
		return time;
	}

	/**
	 * 
	 * @param time
	 */
	public void setTime(String time) {
		this.time = time;
	}

	/**
	 * 
	 * @return
	 */
	public String getTimezone() {
		return timezone;
	}

	/**
	 * 
	 * @param hour
	 */
	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}

}
