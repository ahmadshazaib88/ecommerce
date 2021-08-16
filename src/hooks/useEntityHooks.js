import { useQuery, useMutation, useQueryClient } from "react-query";
import * as externalApi from "../api";

export default function useEntityHooks(entity, api) {
  const _api = api || externalApi[entity];
  const getAllQueryName = `get_all_${entity}`;
  const getQueryName = `get_${entity}`;

  const queryClient = useQueryClient();

  const getAllQuery = (query) =>
    useQuery([getAllQueryName, query], () => _api.getAll({ ...query }), {
      keepPreviousData: true,
    });
  const getQuery = (id) => useQuery([getQueryName, id], () => _api.get(id)); // should invalidate this?
  const createMutation = useMutation((data) => _api.create({ ...data }), {
    onSuccess: (data) => queryClient.invalidateQueries(getAllQueryName)
      // queryClient.setQueriesData({ queryKey: getAllQueryName }, (oldData) => ({
      //   ...oldData,
      //   docs: [...oldData.docs, data],
      // })),
  });
  const updateMutation = useMutation((data) => _api.update(data?._id, data), {
    onSuccess: (data) => queryClient.invalidateQueries(getAllQueryName)
      // queryClient.setQueriesData({ queryKey: getAllQueryName }, (oldData) => ({
      //   ...oldData,
      //   docs: oldData.docs.map((d) => (d._id === data._id ? data : d)),
      // })),
  });
  const deleteMutation = useMutation((data) => _api.remove(data._id), {
    onSuccess: (data) => queryClient.invalidateQueries(getAllQueryName)
      // queryClient.setQueriesData({ queryKey: getAllQueryName }, (oldData) => {
      //   console.log(data, oldData);
      //   return {
      //     ...oldData,
      //     docs: oldData.docs.map((d) => (d._id === data._id ? null : d)),
      //   };
      // }),
  });

  return {
    getAllQuery,
    getQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
