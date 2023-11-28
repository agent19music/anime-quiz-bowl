import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
         
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      
      <div>
        <a href="https://www.facebook.com/sean.monroe.9003?mibextid=ZbWKwL" class="me-4 link-secondary" target='blank'>
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/ufwsean" target='blank'class="me-4 link-secondary">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="mailto:seanmotanya@gmail.com"target='blank' class="me-4 link-secondary">
          <i class="fab fa-google"></i>
        </a>
        <a href="https://instagram.com/brand.on.85?igshid=MTNiYzNiMzkwZA==" target='blank'class="me-4 link-secondary">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/brandon-nyakea-6a7aa7270/" target='blank' class="me-4 link-secondary">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/agent19music" target='blank' class="me-4 link-secondary">
          <i class="fab fa-github"></i>
        </a>
      </div>
       </section>
    
  
      <section class="">
      <div class="container text-center text-md-start mt-5">
        
        <div class="row mt-3">
          
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 text-secondary"></i>FARM SENSE
            </h6>
            <p>
              Making Farming Easier For You !!
            </p>
          </div>
         
          
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold mb-4">
              Navigate
            </h6>
            <p>
              <a href="/homepage" class="text-reset">Home</a>
            </p>
           
            
          </div>
          
          
  
          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3 text-secondary"></i> Nairobi Farm Sense Towers</p>
            <p>
              <i class="fas fa-envelope me-3 text-secondary"></i>
              brandonnyakea@gamail.com
            </p>
            <p><i class="fas fa-phone me-3 text-secondary"></i> + 254 796 108 258</p>
            <p><i class="fas fa-print me-3 text-secondary"></i> + 971 582 301 251</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" >
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="/">Farmsense All rights reserved</a>
    </div>
    
  
  
          
      </div>
  )
}
