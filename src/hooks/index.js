import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios-Instance/index";
import { queryKeys } from "../react-query/constants";

// const SERVER_ERROR = "There was an error contacting the server.";

const getCategoryList = async () => {
  const data = await axiosInstance({
    url: "/hackathon/categories-list",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data?.data;
};

export function useCategoryList() {
  const fallback = [];
  const { data = fallback } = useQuery({
    queryKey: [queryKeys.categories],
    queryFn: () => getCategoryList(),
  });
  return data;
}

async function registerUser(formData) {
  const data = await axiosInstance({
    url: "/hackathon/registration",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data?.data;
}

export function useRegister() {
  const queryClient = useQueryClient();
  const { mutate, isError, error, isSuccess, reset } = useMutation({
    mutationFn: (formData) => registerUser(formData),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.user]);
    },
  });
  return { mutate, isError, error, isSuccess, reset };
}

async function registerContact(formData) {
  const data = await axiosInstance({
    url: "/hackathon/contact-form",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data?.data;
}

export function useContact() {
  const queryClient = useQueryClient();
  const { mutate, isError, error, isSuccess, reset } = useMutation({
    mutationFn: (formData) => registerContact(formData),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.contact]);
    },
  });
  return { mutate, isError, error, isSuccess, reset };
}
