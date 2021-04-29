package com.jfloresc.tutenws.mgr.impl;

import org.springframework.stereotype.Service;

import com.jfloresc.tutenws.mgr.TutenWsMgr;
import com.jfloresc.tutenws.utils.Utils;
import com.jfloresc.tutenws.vo.ObtenerHoraRequest;
import com.jfloresc.tutenws.vo.ObtenerHoraResponse;
import com.jfloresc.tutenws.vo.Response;

/**
 * 
 * @author jfloresc
 *
 */
@Service
public class TutenWsMgrImpl implements TutenWsMgr {

	/**
	 * 
	 */
	@Override
	public ObtenerHoraResponse obtenerHora(ObtenerHoraRequest request) {
		Response response = new Response();
		if(!Utils.validaFormatoRequest(request)) {
			response.setTime("ERROR FORMATO");
			response.setTimezone("ERROR FORMATO");
		} else {
			response.setTime(Utils.retornaCambioTime(request));
			response.setTimezone(Utils.retornaUTCTimezone(request));
		}
		
		ObtenerHoraResponse obtenerHoraResponse = new ObtenerHoraResponse();
		obtenerHoraResponse.setResponse(response);

		return obtenerHoraResponse;
	}

}
