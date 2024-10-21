export default interface Evento {
  id: number;
  attributes: {
    poster: {
      data:{
        attributes:{
          caption: string,
          formats:{
            thumbnail:{
              url:string
            }
            medium:{
              url:string
            }
            small:{
              url:string
            }
          }
        }
      }

    }
    fechaEvento: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}