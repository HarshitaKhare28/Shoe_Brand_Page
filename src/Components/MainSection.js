const MainSection = () =>{
    return(
        <main className="main">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>
                <div className="main-btn">
                    <button>Shop Now</button>
                    <button className="secbtn">Category</button>
                </div>
                <div className="shopmore">
                    <p>ALSO AVAILABLE ON</p>
                    <div classname="sites">
                    <img src="flipkart.png" alt="flipkart"/>
                    <img src="amazon.png" alt="amazon"/>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="shoes.png" alt="shoeimage"/>
            </div>
        </main>
    )

}
export default MainSection;