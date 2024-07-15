import { cn } from '@/lib/utils';

const TrophyIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={cn('size-8', className)}
		>
			<path
				d='M18.6417 4.75162V4.75162C18.7559 3.26734 17.5823 2 16.0937 2H7.79116C6.30249 2 5.1289 3.26734 5.24308 4.75162V4.75162M18.6417 4.75162L18.1433 11.2316C17.894 14.4718 15.1922 16.9738 11.9424 16.9738V16.9738M18.6417 4.75162V4.75162C20.8899 4.75162 22.6249 6.7295 22.3321 8.95854L22.2235 9.7848C21.9428 11.9211 20.122 13.5183 17.9674 13.5183V13.5183M5.24308 4.75162L5.74154 11.2316C5.99078 14.4718 8.69266 16.9738 11.9424 16.9738V16.9738M5.24308 4.75162V4.75162C2.99488 4.75162 1.25987 6.7295 1.55274 8.95854L1.6613 9.7848C1.94198 11.9211 3.76279 13.5183 5.91744 13.5183V13.5183M11.9424 16.9738V19.2775M11.9424 19.2775L14.4923 20.8074C15.6318 21.4911 16.2015 21.833 16.1982 22.1629C16.1972 22.2633 16.1699 22.3617 16.1191 22.4484C15.9523 22.733 15.2878 22.733 13.9589 22.733H9.92588C8.597 22.733 7.93256 22.733 7.76568 22.4484C7.71487 22.3617 7.68761 22.2633 7.6866 22.1629C7.68327 21.833 8.25302 21.4911 9.39253 20.8074L11.9424 19.2775Z'
				stroke='#FF9900'
				stroke-width='2.30366'
				stroke-linejoin='round'
			/>
			<path
				d='M11.0129 7.05155C11.3694 6.32928 11.5476 5.96815 11.8155 5.90756C11.8991 5.88863 11.986 5.88863 12.0696 5.90756C12.3375 5.96815 12.5157 6.32928 12.8721 7.05155L12.9471 7.20347C13.0519 7.41578 13.1043 7.52193 13.1888 7.59682C13.2166 7.62149 13.2468 7.6434 13.2789 7.66226C13.3762 7.71949 13.4934 7.73651 13.7277 7.77056L13.8953 7.79492C14.6924 7.91074 15.0909 7.96865 15.2313 8.20466C15.2752 8.27837 15.302 8.36095 15.3098 8.44636C15.335 8.71981 15.0466 9.00092 14.4698 9.56312L14.3485 9.68138C14.179 9.84664 14.0942 9.92927 14.0491 10.0328C14.0342 10.0669 14.0227 10.1023 14.0147 10.1387C13.9903 10.2489 14.0104 10.3656 14.0504 10.5989L14.079 10.7659C14.2152 11.5598 14.2833 11.9567 14.1022 12.1631C14.0456 12.2276 13.9754 12.2787 13.8966 12.3125C13.6443 12.4209 13.2878 12.2335 12.5749 11.8587L12.4249 11.7799C12.2154 11.6697 12.1106 11.6146 11.9982 11.6037C11.9612 11.6001 11.9239 11.6001 11.8869 11.6037C11.7745 11.6146 11.6697 11.6697 11.4602 11.7799L11.3102 11.8587C10.5973 12.2335 10.2408 12.4209 9.98852 12.3125C9.90971 12.2787 9.83947 12.2276 9.78291 12.1631C9.60184 11.9567 9.66992 11.5598 9.80607 10.7659L9.83471 10.5989C9.87473 10.3656 9.89474 10.2489 9.87039 10.1387C9.86237 10.1023 9.85085 10.0669 9.83599 10.0328C9.79088 9.92927 9.70611 9.84664 9.53657 9.68138L9.41526 9.56312C8.8385 9.00092 8.55011 8.71981 8.57526 8.44636C8.58311 8.36095 8.60994 8.27837 8.65379 8.20466C8.79418 7.96865 9.19272 7.91074 9.98978 7.79492L10.1574 7.77056C10.3917 7.73651 10.5089 7.71949 10.6062 7.66226C10.6383 7.6434 10.6684 7.62149 10.6963 7.59682C10.7808 7.52193 10.8332 7.41578 10.938 7.20347L11.0129 7.05155Z'
				stroke='#FF9900'
				stroke-width='2.30366'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
export default TrophyIcon;
