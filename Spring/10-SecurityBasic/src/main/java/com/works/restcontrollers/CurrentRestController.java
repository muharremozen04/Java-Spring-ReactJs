package com.works.restcontrollers;

import com.works.entities.Current;
import com.works.services.CurrentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/current")
public class CurrentRestController {

    final CurrentService currentService;

    public CurrentRestController(CurrentService currentService) {
        this.currentService = currentService;
    }

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Current current){
        return currentService.save(current);
    }

    @GetMapping("/list")
    public ResponseEntity list(){
        return currentService.list();
    }

}
