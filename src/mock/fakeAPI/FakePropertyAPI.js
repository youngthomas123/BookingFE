import {properties} from "../fakeData/Property"
async function getProperties(from, to)
{
    const data = properties.slice(from, to);


    return (
        {
            totalCount : properties.length,
            properties : data,

        }
    )
    
}

const FakePropertyAPI = {
    getProperties,

};

export default FakePropertyAPI;