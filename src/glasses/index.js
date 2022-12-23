import React, { Component } from 'react'

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listGlasses: [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./glassesImage/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "./glassesImage/v2.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: "./glassesImage/v3.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: "./glassesImage/v4.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: "./glassesImage/v5.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: "./glassesImage/v6.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: "./glassesImage/v7.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: "./glassesImage/v8.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: "./glassesImage/v9.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
      ],
      activeGlasses: "",
      activeName: "",
      activeDesc: "",
    }
  }

  renderListGlasses = () => {
    return this.state.listGlasses.map((glassesItem) => {
      return (
        <div className='col-3 py-3' key={glassesItem.id}>
          <button className='btn btn-light' onClick={() => {
            this.renderActiveGlasses(glassesItem)
          }}>
            <img src={glassesItem.url} className="img-fluid" width="1000px" />
          </button>
        </div>
      )
    })
  }

  renderActiveGlasses = (glassesItem) => {
    this.setState({
      activeGlasses: glassesItem.url,
      activeName: glassesItem.name,
      activeDesc: glassesItem.desc,
    })
    document.getElementsByClassName("over")[0].style.display="block";
  }



  render() {
    return (
      <>
        <div className='model'>
          <img className='img-fluid' src='./glassesImage/model.jpg' alt="" width="300px" />
          <img className='img-fluid activeImg' src={this.state.activeGlasses}/>
          <div className='over'>
            <h3>{this.state.activeName}</h3>
            <p>{this.state.activeDesc}</p>

          </div>
        </div>
        <br></br>
        <div className='container'>
          <div className='row'>
            {this.renderListGlasses()}
          </div>
        </div>

      </>
    )
  }
}
