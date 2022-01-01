import React from "react";
import Card from "../components/card"

function Module() {
  return (
      <div>
          <div className="d-flex justify-content-center">
              <h2 style={{marginTop: "90px", fontWeight:"650"}}>MODUL PEMBELAJARAN</h2>
          </div>
          <div style={{marginTop: "50px", marginBottom:"100px"}}>
          <div className="container">
              <div className="row justify-content-md-center">
                  <div className="col-md-4">
                      <Card content ={{
                          imageUrl:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
                          title:"Modul 5",
                          Paragraph:"Pembelajaran Konstektual Seni dan Budaya Berbasis Proyek.",
                      }}>
                      </Card>
                  </div>
                  <div className="col-md-4">
                      <Card content={{
                          imageUrl:'https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
                          title:"Modul 6",
                          Paragraph:"Seni dan Budaya Sebagai Media Artikulasi Pengetahuan.",
                      }}>
                      </Card>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Module;