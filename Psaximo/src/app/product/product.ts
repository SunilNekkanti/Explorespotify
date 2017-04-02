export class Product {

    public imageUrl : string;
    public productName : string;
    public releaseDate : Date;
    public rating : string;
    public numOfReviews : string;
    public description : string

    /**
     *
     */
    constructor(_imageUrl: string, _productName : string, _releaseDate : Date, _rating : string, _numOfReviews : string, _description: string) {
            this.imageUrl = _imageUrl,
            this.productName = _productName,
            this.releaseDate = _releaseDate,
            this.rating = _rating,
            this.numOfReviews = _numOfReviews,
            this.description = _description;     
    }

}
