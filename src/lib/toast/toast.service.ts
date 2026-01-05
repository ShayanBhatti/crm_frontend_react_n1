import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

export const toastService = {
  success(message: string) {
    Toast.fire({ icon: "success", title: message });
  },

  error(message: string) {
    Toast.fire({ icon: "error", title: message });
  },
};
