package com.jfloresc.tutenws.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import com.jfloresc.tutenws.vo.ObtenerHoraRequest;
import com.jfloresc.tutenws.vo.ObtenerHoraResponse;

/**
 * 
 * @author jfloresc
 *
 */
public class Utils {
	
	public static boolean validaFormatoRequest(ObtenerHoraRequest request) {
		boolean salida = true;
		if(validaVacioNulo(request)) {
			System.out.println("Error: Datos vacios o nulos");
			salida = false;
		} else if(!validaFormatoTime(request)) {
			salida = false;
		} else if(!validaFormatoTimezone(request)) {
			salida = false;
		}
		
		return salida;
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	public static boolean validaVacioNulo(ObtenerHoraRequest request) {
		return null == request || null == request.getTime() || request.getTime().trim().isEmpty() || null == request.getTimezone() || request.getTimezone().trim().isEmpty();
	}

	/**
	 * 
	 * @param request
	 * @return
	 */
	public static boolean validaFormatoTime(ObtenerHoraRequest request) {
		boolean salida = false;

		SimpleDateFormat sdf = new SimpleDateFormat("hh:mm:ss");

		try {
			sdf.parse(request.getTime());
			salida = true;
		} catch (ParseException e) {
			System.out.println("Error: Time posee formato invalido");
		}

		return salida;
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	public static boolean validaFormatoTimezone(ObtenerHoraRequest request) {
		boolean salida = false;
		
		try {
			Integer.parseInt(request.getTimezone());
			salida = true;
		} catch (Exception e) {
			System.out.println("Error: Timezone posee formato invalido");
		}
		
		return salida;
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	public static String retornaCambioTime(ObtenerHoraRequest request) {
		String salida = null;

		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(sdf.parse(request.getTime()));
			cal.add(Calendar.HOUR_OF_DAY, Integer.parseInt(request.getTimezone()));
			Date date = cal.getTime(); 
			salida = sdf.format(date);
		} catch (ParseException e) {
			System.out.println("Error: Formato invalido");
			salida = "ERROR FORMATO HORA";
		}

		return salida;
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	public static String retornaUTCTimezone(ObtenerHoraRequest request) {
		String salida = "UTC";
		int timezone = Integer.parseInt(request.getTimezone());
		if(0 < timezone) {
			salida = salida.concat("+").concat(request.getTimezone());
		} else {
			salida = salida.concat(request.getTimezone());
		}
		
		return salida;
	}

	/**
	 * 
	 * @param cadena
	 * @return
	 */
	public static boolean isEmpty(String cadena) {
		return null == cadena || cadena.trim().isEmpty();
	}

	/**
	 * 
	 * @param request
	 */
	public static void imprimirRequest(ObtenerHoraRequest request) {
		System.out.println("Imprimiendo datos de entrada");
		System.out.println("Time: " + request.getTime());
		System.out.println("Timezone: " + request.getTimezone());
	}
	
	/**
	 * 
	 * @param response
	 */
	public static void imprimirResponse(ObtenerHoraResponse response) {
		System.out.println("Imprimiendo datos de salida");
		System.out.println("Time: " + response.getResponse().getTime());
		System.out.println("Timezone: " + response.getResponse().getTimezone());
	}
}
