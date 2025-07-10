import{test, expect} from '@playwright/test'
import { request } from 'http'

var userid

test("Get users", async({request})=>{

    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Create user", async({request})=>{

    const response = await request.post("https://reqres.in/api/users",
                                    {
                                        data:{"name":"Jhon", "job":"trainer"},
                                        headers:{"Accept": "application/json", "x-api-key": "reqres-free-v1"}
                                    })

    console.log(await response.json())
    expect(response.status()).toBe(201)            

    var res=response.json()
    var userid = res.id
})

test("Update user", async({request})=>{

    const response = await request.put("https://reqres.in/api/users/"+userid,
                                        {
                                            data: {"name":"Jhon", "job":"engineer"},
                                            headers: {"Accept": "application/json", "x-api-key": "reqres-free-v1"} //add this Authorization in the headers section. Otherwise the API won't authorize this kind of action. Authorization is required. The API is designed like so
                                        })
    
    console.log(await response.json())
    expect(response.status()).toBe(200)
    
})

test("Delete user", async({request})=>{

    const response = await request.delete("https://reqres.in/api/users/"+userid,
                                            {
                                            headers:{"x-api-key": "reqres-free-v1"} //add this Authorization in the headers section. Otherwise the API won't authorize this kind of action. Authorization is required. The API is designed like so
                                            })
    expect(response.status()).toBe(204)
})