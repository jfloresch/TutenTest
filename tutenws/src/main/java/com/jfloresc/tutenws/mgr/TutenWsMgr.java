package com.jfloresc.tutenws.mgr;

import com.jfloresc.tutenws.vo.ObtenerHoraRequest;
import com.jfloresc.tutenws.vo.ObtenerHoraResponse;

/**
 * 
 * @author jfloresc
 *
 */
public interface TutenWsMgr {
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	public ObtenerHoraResponse obtenerHora(ObtenerHoraRequest request);
	
}
