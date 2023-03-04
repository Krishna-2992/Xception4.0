import React from "react"
import {mediaPartners, techPartner, other} from "../static/sponsors";
import Card from "../component/Card"
import "./sponsor.css"
function Sponsors(props){
    // console.log(sponsors)
    return(
        <>
            <div class="container text-center">
                <h1 className="text-light fw-semibold">Our Sponsors</h1><hr/>
                <div className="row">
                <h5 className="text-white fw-semibold"><u>Media Partners</u></h5><hr/>
                    {mediaPartners.map((e)=>{
                        return (
                            <div className="col-3 mb-5">
                                <div className="card disOn" >
                                <img src={e.img} class="card-img-top" alt={e.img}/>
                                {/* <Card className = "card-m" data = {e.data}/> */}
                                <div className="card-body dis">
                                    <Card className="card-m" data = {e.data}/>
                                </div>
                                                                {/* <!-- Button trigger modal --> */}
                                <p   data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Place for info button
                                </p>

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Details</h1>
                                        
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button> */}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}


                </div>
                <div className="row text-center">
                <h5 className="text-white fw-semibold"><u>Technical Partners</u></h5><hr/>
                {techPartner.map((e)=>{
                        return (
                            <div className="col-4 mb-5">
                                <div className="card disOn" >
                                <img src={e.img} class="card-img-top" alt={e.img}/>
                                {/* <Card className = "card-m" data = {e.data}/> */}
                                <div className="card-body dis">
                                    <Card className="card-m" data = {e.data}/>
                                </div>
                                                                {/* <!-- Button trigger modal --> */}
                                <p   data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Place for info button
                                </p>

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="row text-center">
                <h5 className="text-white fw-semibold"><u>Other Partners</u></h5><hr/>
                {other.map((e)=>{
                        return (
                            <div className="col-6 mb-5">
                                <div className="card disOn" >
                                <img src={e.img} class="card-img-top" alt={e.img}/>
                                {/* <Card className = "card-m" data = {e.data}/> */}
                                <div className="card-body dis">
                                    <Card className="card-m" data = {e.data}/>
                                </div>
                                                                {/* <!-- Button trigger modal --> */}
                                <p   data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Place for info button
                                </p>

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Sponsors;

