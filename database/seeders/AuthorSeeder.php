<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $authors = [
            ['name' => 'Adima Aishasofia Diaz'],
            ['name' => 'Cresentia Maureen'],
            ['name' => 'Dinda Ardena Nugrahainy'],
            ['name' => 'Halima Athaya Puteri Sholehah'],
            ['name' => 'Khanza Latania Chaidir'],
            ['name' => 'Novianti Aulia'],
            ['name' => 'Regina Agni Anindya'],
            ['name' => 'Reviana Mulyadi Puteri'],
            ['name' => 'Sheryl Queen Agvina'],
        ];

        DB::table('authors')->insert($authors);
    }
}
