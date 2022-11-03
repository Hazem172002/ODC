import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { SignIn } from 'src/auth/dto';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<any> {
    const r = await this.httpService.axiosRef.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ef14cbad873b9523a000ee8fcc3f5241&language=en-US&page=1',
    );
    return r.data;

    /* for (const todo of r.data.results) {
      return todo.adult;
      const va=await this.prisma.create({adult:todo.adult})
    }*/
  }
}
