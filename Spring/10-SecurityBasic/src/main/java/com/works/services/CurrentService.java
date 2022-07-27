package com.works.services;

import com.works.entities.Current;
import com.works.entities.Product;
import com.works.repositories.CurrentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class CurrentService {

    final CurrentRepository currentRepository;

    public CurrentService(CurrentRepository currentRepository) {
        this.currentRepository = currentRepository;
    }

    public ResponseEntity save(Current current){
        Map<String,Object> hm = new LinkedHashMap<>();
        currentRepository.save(current);
        hm.put("status",true);
        hm.put("result",current);
        return new ResponseEntity(hm, HttpStatus.OK);
    }

    public ResponseEntity list (){
        Map<String,Object> hm = new LinkedHashMap<>();
        hm.put("status",true);
        hm.put("result",currentRepository.findAll());
        return new ResponseEntity(hm, HttpStatus.OK);
    }
}