import { PostCategory } from "../enums";
import { IsArray, IsBoolean, IsString } from 'class-validator';
import { PartialType } from "@nestjs/mapped-types";
import { CreatePostDto } from "./create-post.dto";
import { OmitType } from "@nestjs/swagger";

export class EditPostDto extends PartialType(OmitType(CreatePostDto, ['slug'] as const)) {}