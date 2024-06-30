import { IIconProps } from "@/helpers/types";
import { cn } from "@/lib/utils";

const VideoChatIcon = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-3 h-3 fill-black", className)}
      {...props}>
      <path d="M4.5013 6.37496C4.5013 6.09317 4.61986 5.82292 4.8309 5.62367C5.04194 5.42441 5.32817 5.31247 5.62663 5.31247H9.0026C9.30106 5.31247 9.58729 5.42441 9.79833 5.62367C10.0094 5.82292 10.1279 6.09317 10.1279 6.37496V10.6249C10.1279 10.9067 10.0094 11.177 9.79833 11.3762C9.58729 11.5755 9.30106 11.6874 9.0026 11.6874H5.62663C5.32817 11.6874 5.04194 11.5755 4.8309 11.3762C4.61986 11.177 4.5013 10.9067 4.5013 10.6249V6.37496ZM11.2533 7.43746L12.5429 6.21984C12.6215 6.14541 12.7217 6.09469 12.8309 6.07408C12.9401 6.05347 13.0533 6.0639 13.1562 6.10405C13.2591 6.14421 13.347 6.21228 13.4089 6.29966C13.4708 6.38703 13.5039 6.48978 13.5039 6.5949V10.405C13.5039 10.5101 13.4708 10.6129 13.4089 10.7002C13.347 10.7876 13.2591 10.8557 13.1562 10.8958C13.0533 10.936 12.9401 10.9464 12.8309 10.9258C12.7217 10.9052 12.6215 10.8545 12.5429 10.7801L11.2533 9.56244V7.43746ZM9.0026 0C10.3621 0.000741847 11.7038 0.292192 12.927 0.852478C14.1501 1.41277 15.223 2.22734 16.0651 3.23507C16.9072 4.2428 17.4966 5.41751 17.7891 6.67105C18.0817 7.9246 18.0697 9.22442 17.7541 10.473C17.4385 11.7215 16.8276 12.8864 15.967 13.8801C15.1065 14.8739 14.0188 15.6707 12.7855 16.2108C11.5522 16.7509 10.2053 17.0203 8.84599 16.9987C7.48667 16.9771 6.15017 16.6651 4.9368 16.0862L4.80064 16.0171L0.698827 16.984C0.619887 17.0027 0.537579 17.0051 0.457585 16.9908C0.37759 16.9766 0.301814 16.9462 0.235484 16.9017C0.169154 16.8571 0.11385 16.7995 0.073389 16.7328C0.032928 16.6661 0.00827276 16.592 0.00112524 16.5154V16.4283L0.01688 16.3401L1.04093 12.4684L0.97003 12.3409C0.456342 11.3832 0.139416 10.3424 0.0360105 9.27345L0.00787724 8.86757L0 8.49995C0 6.24562 0.948486 4.08363 2.6368 2.48958C4.32512 0.895528 6.61496 0 9.0026 0ZM9.0026 1.06249C7.62798 1.06228 6.27722 1.40171 5.08456 2.04704C3.8919 2.69238 2.89887 3.62115 2.20413 4.74107C1.5094 5.86099 1.13715 7.13306 1.12439 8.43088C1.11162 9.7287 1.45878 11.0071 2.13137 12.139C2.18358 12.227 2.20817 12.3273 2.20226 12.428L2.18651 12.5279L1.33576 15.7377L4.73874 14.9365C4.80792 14.9204 4.87971 14.9168 4.95031 14.9259L5.05271 14.9482L5.15061 14.9897C6.20093 15.5448 7.37203 15.8653 8.57398 15.9266C9.77593 15.9878 10.9768 15.7882 12.0843 15.343C13.1918 14.8978 14.1765 14.2189 14.9628 13.3584C15.7491 12.4979 16.3161 11.4788 16.6202 10.3791C16.9244 9.27952 16.9576 8.12871 16.7173 7.0151C16.4769 5.90149 15.9695 4.85468 15.234 3.95507C14.4984 3.05545 13.5543 2.32696 12.4741 1.82553C11.3939 1.32411 10.2063 1.06308 9.0026 1.06249Z" />
    </svg>
  );
};

export default VideoChatIcon;
