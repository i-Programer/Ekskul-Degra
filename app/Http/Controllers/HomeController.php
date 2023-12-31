<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Author;

class HomeController extends Controller
{
    public function index(){
        $allProject = Project::all();
        
        return Inertia::render('Homepage', compact('allProject'));
    }
}
