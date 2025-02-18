import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL =
  "http://skincare-sbs.southeastasia.azurecontainer.io:8080/api/Booking/completed";

interface MutationVariables {
  BookingId: number;
}

export const useCompletedBooking = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, MutationVariables>({
    mutationFn: async ({ BookingId }: MutationVariables): Promise<void> => {
      await axios.put(`${API_BASE_URL}/${BookingId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completed"] });
    },
  });
};
