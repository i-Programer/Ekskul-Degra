<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $project= [
            [
                'author_name' => 'Adima Aishasofia Diaz',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Adima Aishasofia Diaz, Khanza Latania Chaidir , Reviana Mulyadi Puteri',
                'file' => "Project2.jpeg"
            ],
            [
                'author_name' => 'Adima Aishasofia Diaz',
                'file' => "Project3.jpeg"
            ],
            [
                'author_name' => 'Adima Aishasofia Diaz',
                'file' => "Project4.jpeg"
            ],
            [
                'author_name' => 'Cresentia Maureen',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Dinda Ardena Nugrahainy',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Dinda Ardena Nugrahainy',
                'file' => "Project2.jpeg"
            ],
            [
                'author_name' => 'Dinda Ardena Nugrahainy',
                'file' => "Project3.jpeg"
            ],
            [
                'author_name' => 'Dinda Ardena Nugrahainy',
                'file' => "Project4.jpeg"
            ],
            [
                'author_name' => 'Dinda Ardena Nugrahainy',
                'file' => "Project5.jpeg"
            ],
            [
                'author_name' => 'Dinda Ardena Nugrahainy',
                'file' => "Project6.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project2.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project3.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project4.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project5.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project6.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project7.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project8.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project9.jpeg"
            ],
            [
                'author_name' => 'Halima Athaya Puteri Sholehah',
                'file' => "Project10.jpeg"
            ],
            [
                'author_name' => 'Khanza Latania Chaidir',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Novianti Aulia',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Novianti Aulia',
                'file' => "Project2.jpeg"
            ],
            [
                'author_name' => 'Novianti Aulia',
                'file' => "Project3.jpeg"
            ],
            [
                'author_name' => 'Regina Agni Anindya',
                'file' => "Project1.jpeg"
            ],
            [
                'author_name' => 'Sheryl Queen Agvina',
                'file' => "Project1.jpeg"
            ],
        ];

        DB::table('projects')->insert($project);
    }
}
