import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { EditPostDto } from './dtos';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    
    constructor(private readonly postService: PostService) {}

    @Get()
    async getAll() {
        const data = await this.postService.getAll();

        return {
            message: "Get data successfully",
            data
        }
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.postService.getOne(id);
    }

    @Post()
    createOne(@Body() dto: CreatePostDto) {
        return this.postService.createOne(dto);
    }

    @Put(':id')
    editOne(@Param('id') id: number, @Body() dto: EditPostDto) {
        return this.postService.editOne(id, dto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.postService.deleteOne(id);
    }
}
