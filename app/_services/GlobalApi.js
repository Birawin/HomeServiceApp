const { default: request } = require("graphql-request")

const MASTER_URL ='https://ap-south-1.cdn.hygraph.com/content/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'

const getCategory=async()=>{
    const query=gql`
    query Category {
        categories {
            bgcolour {
                hex
            }
            id
            name
            icon {
                url
            }
        }
    }
    `

    const result=await request(MASTER_URL, query)
    return result; 
}


export default {
    getCategory
}

