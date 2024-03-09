package org.jsp.ecommerceapp.service;


import org.jsp.ecommerceapp.dao.MerchantDao;
import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MerchantService {
	@Autowired
	private MerchantDao merchantDao;
	
	public ResponseEntity<Merchant> saveMerchant(Merchant merchant){
		ResponseStructure<Merchant> structure=new ResponseStructure<>();
		structure.setMessage("merchant saved");
		structure.setBody(merchantDao.saveMerchant(merchant));
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<Merchant>(HttpStatus.CREATED);
	}

}
