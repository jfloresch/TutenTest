package com.jfloresc.tutenws.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jfloresc.tutenws.mgr.TutenWsMgr;
import com.jfloresc.tutenws.vo.ObtenerHoraRequest;
import com.jfloresc.tutenws.vo.ObtenerHoraResponse;

/**
 * 
 * @author jfloresc
 *
 */
@RestController
public class TutenApi {
	
	@Autowired
	private TutenWsMgr tutenWsMgr;
	
	/**
	 * 
	 * @return
	 */
	@RequestMapping(value="/obtenerHora", method=RequestMethod.POST)
	public ObtenerHoraResponse obtenerHora(ObtenerHoraRequest request) {
		return tutenWsMgr.obtenerHora(request);
	}
}
