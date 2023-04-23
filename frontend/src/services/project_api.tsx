import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const url = "http://127.0.0.1:8000/project/api/v1/"
export const ProjectApi = createApi({
    reducerPath: "ProjectApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        fetchAllProjects: build.query<Array<{ name: string, data: string }>, number>({
            queryFn: async (arg) => {
                try {
                    const response = await fetch(url + "project_data");
                    return { data: await response.json() };
                }
                catch (e: any) {
                    return { error: e.message }
                }
            }
        })
    })
})