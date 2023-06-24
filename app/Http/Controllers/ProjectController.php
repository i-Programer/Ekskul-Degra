<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Author;

class ProjectController extends Controller
{
    public function projectDetails($projectId){
        $projectDetails = Project::find($projectId);

        return Inertia::render('Project/ProjectDetails', compact('projectDetails'));
    }
}
