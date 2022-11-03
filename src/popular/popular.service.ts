/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Get, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PopularService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async newPlaying(): Promise<any> {
    const r = await this.httpService.axiosRef.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=ef14cbad873b9523a000ee8fcc3f5241&language=en-US&page=1',
    );

    for (const todo of r.data.results) {
      const rs = await this.prisma.nowPlaying.findFirst({
        where: {
          Ids: todo.id,
        },
      });
      if (!rs) {
        const data = await this.prisma.nowPlaying.create({
          data: {
            adult: todo.adult,
            backdrop_path: todo.backdrop_path,
            Ids: todo.id,
            original_language: todo.original_language,
            original_title: todo.original_title,
            overview: todo.overview,
            popularity: todo.popularity,
            poster_path: todo.poster_path,
            release_date: todo.release_date,
            title: todo.title,
            video: todo.video,
            vote_average: todo.vote_average,
            vote_count: todo.vote_count,
          },
        });
      }
    }
  }
  async upComing(): Promise<any> {
    const r = await this.httpService.axiosRef.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=ef14cbad873b9523a000ee8fcc3f5241&language=en-US&page=1',
    );

    for (const todo of r.data.results) {
      const rs = await this.prisma.upComing.findFirst({
        where: {
          Ids: todo.id,
        },
      });
      if (!rs) {
        const data = await this.prisma.upComing.create({
          data: {
            adult: todo.adult,
            backdrop_path: todo.backdrop_path,
            Ids: todo.id,
            original_language: todo.original_language,
            original_title: todo.original_title,
            overview: todo.overview,
            popularity: todo.popularity,
            poster_path: todo.poster_path,
            release_date: todo.release_date,
            title: todo.title,
            video: todo.video,
            vote_average: todo.vote_average,
            vote_count: todo.vote_count,
          },
        });
      }
    }
  }

  async getNowPlaying() {
    return this.prisma.nowPlaying.findMany();
  }
  async getUpComing() {
    return this.prisma.upComing.findMany();
  }

  async shedule() {
    const myMovie = await this.prisma.nowPlaying.findMany();
    let arr = [];
    let newarr = [];
    let newarr2 = [];
    for (const todo of myMovie) {
      arr = myMovie;
    }
    for (let i = 0; i < 9; i++) {
      newarr.push(arr[i]);
    }

    for (let i = 0; i < 3; i++) {
      let time = 1;
      for (let k = 0; k < 3; k++) {
        newarr2.push({ time: time, ...newarr[i] });
        time += 3;
      }
    }

    for (let i = 0; i < newarr2.length; i++) {
      await this.prisma.schedule.create({
        data: {
          adult: newarr2[i].adult,
          backdrop_path: newarr2[i].backdrop_path,
          Ids: newarr2[i].Ids,
          original_language: newarr2[i].original_language,
          original_title: newarr2[i].original_title,
          overview: newarr2[i].overview,
          popularity: newarr2[i].popularity,
          poster_path: newarr2[i].poster_path,
          release_date: newarr2[i].release_date,
          title: newarr2[i].title,
          video: newarr2[i].video,
          vote_average: newarr2[i].vote_average,
          vote_count: newarr2[i].vote_count,
          time: newarr2[i].time,
        },
      });
    }
  }
  async dropShedule() {
    return this.prisma.schedule.deleteMany();
  }
}
