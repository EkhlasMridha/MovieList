import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_GUARD = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_GUARD, true);