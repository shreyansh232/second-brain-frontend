import { IconProps, iconSizeVariants } from ".";

export const Logo = ({ size = "sm" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 -2 24 32"
      className={`${iconSizeVariants[size]} text-yellow-500`}
      stroke="currentColor"
    >
      <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M23,12c0,1.892-4.518,4-11,4  c-1.342,0-2.594-0.094-3.745-0.255C8.094,14.594,8,13.342,8,12c0-6.482,2.108-11,4-11C18.065,1,23,5.935,23,12z M9.774,1.227  C8.118,3.161,7,7.205,7,12c0,1.251,0.076,2.452,0.218,3.577C3.407,14.869,1,13.379,1,12C1,6.697,4.773,2.259,9.774,1.227z   M1.227,14.226c1.269,1.086,3.442,1.942,6.147,2.4c0.459,2.705,1.314,4.878,2.4,6.147C5.492,21.889,2.111,18.508,1.227,14.226z   M12,23c-1.379,0-2.869-2.407-3.577-6.218C9.548,16.924,10.749,17,12,17c4.795,0,8.839-1.118,10.773-2.774  C21.741,19.227,17.303,23,12,23z" />
    </svg>
  );
};
