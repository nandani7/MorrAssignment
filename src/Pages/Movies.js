import React,{Component} from "react";
import Title from '../components/Title'
import MovieCard from '../components/MovieCard'
export default class MoviesClub extends Component{
    state={
        loading: true,
        person:null
    };
    async componentDidMount(){
        const response=await fetch('../assets/data.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          });
        const data=await response.json();
        this.setState({person: data[24],loading:false})
        console.log(data[24])
    }
    render(){
        return(
            <div>
                
            <Title title="Movies"/>
                {this.state.loading || !this.state.person ? <div>loading...</div>: <div>
                    <div>
                        <MovieCard src={this.state.person.images.PosterArt.url} height={this.state.person.images.PosterArt.height} width={this.state.person.images.PosterArt.width}/>
                        {this.state.person.title}
                    </div>
                    </div>}
            </div>
        )
    }       
}