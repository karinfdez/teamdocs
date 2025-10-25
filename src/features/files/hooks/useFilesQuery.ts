import { useQuery } from "@tanstack/react-query";
import { getFiles } from "../api";


export function useFilesQuery() {
	return useQuery({
			queryKey: ['files'],
			queryFn: getFiles,
			staleTime: 5000
	})
}