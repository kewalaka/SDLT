<?php
/**
 * This file contains the "MemberGraghQLProvider" class.
 *
 * @category SilverStripe_Project
 * @package SDLT
 * @author  Catalyst I.T. SilverStripe Team 2018 <silverstripedev@catalyst.net.nz>
 * @copyright 2018 Catalyst.Net Ltd
 * @license https://www.catalyst.net.nz (Commercial)
 * @link https://www.catalyst.net.nz
 */

namespace NZTA\SDLT\GraphQL;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use GraphQL\Type\Definition\ResolveInfo;
use SilverStripe\Security\Member;
use SilverStripe\Security\Security;

/**
 * Class MemberGraghQLProvider
 */

class MemberGraghQLProvider implements ScaffoldingProvider
{
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
    {
        $scaffolder
            ->type(Member::class)
            ->addFields([
                'ID',
                'Email',
                'FirstName',
                'Surname',
                'UserRole'
            ])
            ->operation(SchemaScaffolder::READ)
            ->setName('readCurrentMember')
            ->setUsePagination(false)
            ->setResolver(function ($object, array $args, $context, ResolveInfo $info) {
                $member = Security::getCurrentUser();

                // Check authentication
                if (!$member) {
                    return [];
                }

                $list = Member::get()->filter('ID', $member->ID);
                return $list;
            })
            ->end();

        return $scaffolder;
    }
}
